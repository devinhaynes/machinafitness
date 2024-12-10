import { FormLabel } from "@/components/FormLabel";
import { signup } from "@/app/actions/auth";
import gsi from "@/public/assets/web_light_rd_na.svg";
import fb from "@/public/assets/fb.svg";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  return (
    <div className="h-screen w-screen grid place-content-center gap-4">
      <div className="relative px-12 bg-theme py-1 w-fit rounded-xl text-background before:h-4 before:absolute before:top-full before:w-[1px] before:bg-theme">
        New Account
      </div>
      <form className="card" action={signup}>
        <FormLabel name="email" label="Email" type="email" required />
        <FormLabel name="password" label="Password" type="password" required />
        <div className="flex gap-2 justify-end">
          <button className="action-button" type="submit">
            Sign up
          </button>
        </div>
      </form>
      <div className="text-theme relative isolate ">
        <p className="w-fit mx-auto px-4 text-center bg-background before:-z-10 before:h-1 before:w-full before:absolute before:top-[50%] before:left-0 before:-translate-y-[50%] before:border-b-theme before:border-b-[1px]">
          or sign up with
        </p>
      </div>
      <div className="w-full card !py-4">
        <div className="flex gap-6 justify-center">
          <button formAction={signup}>
            <Image src={gsi} alt="Sign in With Google" />
          </button>
          <button formAction={signup}>
            <Image src={fb} alt="Sign in With Facebook" />
          </button>
        </div>
      </div>
      <Link href="/login" className="text-sm underline">
        Already have an account? Sign in
      </Link>
    </div>
  );
}
