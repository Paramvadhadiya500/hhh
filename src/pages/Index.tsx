import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Redirect to static HTML page
    window.location.href = "/static-menu/index.html";
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p>Redirecting to menu...</p>
    </div>
  );
};

export default Index;
