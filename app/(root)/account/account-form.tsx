"use client";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { type User } from "@supabase/supabase-js";
import { ClientFormLabel } from "@/components/ClientFormLabel";
import { FaSpinner } from "react-icons/fa6";

export default function AccountForm({ user }: { user: User | null }) {
  const supabase = createClient();
  const [loading, setLoading] = useState(true);
  const [fullname, setFullname] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [website, setWebsite] = useState<string | null>(null);
  const [avatar_url, setAvatarUrl] = useState<string | null>(null);

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      const { data, error, status } = await supabase
        .from("profiles")
        .select(`full_name, username, website, avatar_url`)
        .eq("id", user?.id)
        .single();

      if (error && status !== 406) {
        console.log(error);
        throw error;
      }

      if (data) {
        setFullname(data.full_name);
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      // alert("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  async function updateProfile(formData: FormData) {
    try {
      setLoading(true);

      const fullname = formData.get("fullname") as string;
      const username = formData.get("username") as string;
      const website = formData.get("website") as string;

      const { error } = await supabase.from("profiles").upsert({
        id: user?.id as string,
        full_name: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      console.log(error.message);
      alert("Error updating the data!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-screen w-screen grid place-content-center gap-4">
      <form className="card" action={updateProfile}>
        <ClientFormLabel
          name="email"
          label="Email"
          type="email"
          value={user?.email}
          disabled
        />
        <ClientFormLabel
          name="fullname"
          label="Full Name"
          type="text"
          value={fullname || ""}
          onChange={(e) => setFullname(e.target.value)}
        />
        <ClientFormLabel
          name="username"
          label="Username"
          type="text"
          value={username || ""}
          onChange={(e) => setUsername(e.target.value)}
        />
        <ClientFormLabel
          name="website"
          label="Website"
          type="url"
          value={website || ""}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <div className="flex justify-end">
          <button className="action-button" type="submit" disabled={loading}>
            {loading ? (
              <div className="flex items-center gap-2 text-background">
                <FaSpinner className="animate-spin text-xl" />
                <span>Loading...</span>
              </div>
            ) : (
              "Update"
            )}
          </button>
        </div>
      </form>

      <div className="flex justify-end">
        <form action="/auth/signout" method="post">
          <button className="action-button" type="submit">
            Sign out
          </button>
        </form>
      </div>
    </div>
  );
}
