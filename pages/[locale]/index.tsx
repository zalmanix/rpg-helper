import React from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

import { LoginComponent } from "components/Layout/LoginComponent";
import { Layout } from "components/Layout/Layout";

const IndexPage = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();

  if (!user) return <LoginComponent />;

  return (
    <Layout>
      <button onClick={() => void supabaseClient.auth.signOut()}>Sign out</button>
      <p>user:</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <p>client-side data fetching with RLS</p>
    </Layout>
  );
};

export default IndexPage;
