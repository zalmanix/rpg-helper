import React, { useMemo } from "react";
import Link from "next/link";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useScrollDirection } from "../../hooks/useScrollDirection";

import LogOut from "public/header/log-out.svg";
import User from "public/header/user.svg";
import { Tooltip } from "components/utils/Tooltip";

export const Header = () => {
  const supabaseClient = useSupabaseClient();
  const user = useUser();
  const scrollDir = useScrollDirection();
  const headerStyles = useMemo(() => {
    return scrollDir === "down" ? "-top-[100px]" : "top-0";
  }, [scrollDir]);

  const profile = useMemo(() => {
    if (user)
      return (
        <>
          <Tooltip title="My profile">
            <User className="h-8 w-8 fill-textHighEmphasis" />
          </Tooltip>

          <Tooltip title="Log out">
            <LogOut className="h-8 w-8 fill-textHighEmphasis" onClick={() => void supabaseClient.auth.signOut()} />
          </Tooltip>
        </>
      );

    return <></>;
  }, [supabaseClient.auth, user]);

  return (
    <header
      className={`${headerStyles} fixed left-0 right-0 z-50 flex flex-row bg-black px-[5vw] py-6 transition-all duration-150`}>
      <div className="flex w-2/3 flex-row justify-start gap-3">
        <Link href="/">
          <span className="text-primary">Home</span>
        </Link>
        <Link href="/characters">
          <span>Characters</span>
        </Link>
        <Link href="/campaigns">
          <span>Campaigns</span>
        </Link>
      </div>
      <div className="flex w-1/3 flex-row justify-end gap-3">{profile}</div>
    </header>
  );
};
