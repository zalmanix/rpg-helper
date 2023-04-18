import React, { useEffect, useState } from "react";

import { Layout } from "components/Layout/Layout";
import supabase from "config/supabaseClient";

const IndexPage = () => {
  // const [error, setError] = useState(null);
  // const [data, setData] = useState(null);

  // console.log(supabase);

  // useEffect(() => {
  //   const fetch = async () => {
  //     const { data, error } = await supabase.from("CallOfCthulhu1920").select();

  //     if (error) {
  //       setError("Error");
  //       setData(null);
  //       console.log(error);
  //     }
  //     if (data) {
  //       setData(data);
  //       console.log(data);
  //       setError(null);
  //     }
  //   };

  //   void fetch();
  // }, []);
  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    console.log(data, error);
  }

  return (
    <Layout>
      <div className="bg-red-800 text-white" onClick={void signInWithGoogle}>
        login test
      </div>
    </Layout>
  );
};

export default IndexPage;
