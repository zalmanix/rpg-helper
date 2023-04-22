import React from "react";
import { Layout } from "./Layout";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export const LoginComponent = () => {
  const supabaseClient = useSupabaseClient();

  return (
    <Layout>
      <div className="flex min-h-[85vh] items-center justify-center">
        <div className="flex w-1/3 flex-col justify-center py-20">
          <h1 className="pb-4 text-2xl text-primary">Log in</h1>

          <p className="py-4">Please log to use the app</p>

          <Auth
            redirectTo="http://localhost:3000/"
            appearance={{ theme: ThemeSupa }}
            supabaseClient={supabaseClient}
            providers={["google"]}
            socialLayout="horizontal"
          />
        </div>
      </div>
    </Layout>
  );
};
