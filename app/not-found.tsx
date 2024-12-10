// app/not-found.js
export default function NotFound() {
  return (
    <div className="h-screen w-screen grid place-content-center gap-4">
      <div className="card flex flex-col">
        <h1 className="text-xl font-bold flex items-center gap-2 border-l-4 border-l-theme pl-4">
          <span className="text-theme text-4xl">404</span> - Page Not Found
        </h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </div>
  );
}
