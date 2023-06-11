import React from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";

import { LoginComponent } from "components/Layout/LoginComponent";
import { Layout } from "components/Layout/Layout";
import { CharacterScheet } from "components/CallOfCthulhu/CharacterScheet";
import { COCCharacterProvider } from "context/COCCharacterContext";

const IndexPage = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();

  if (!user) return <LoginComponent />;

  return (
    <Layout>
      <COCCharacterProvider>
        <CharacterScheet />
      </COCCharacterProvider>
    </Layout>
  );
};

export default IndexPage;
