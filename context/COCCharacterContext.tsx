import { useUser } from "@supabase/auth-helpers-react";
import supabase from "config/supabaseClient";
import { COCScheetTable, userTable } from "interfaces";
import React, { useState, useMemo, createContext, useCallback, useEffect } from "react";

interface COCCharacterSheet {
  name: string | null;
  job: string | null;
  age: number | null;
  sex: string | null;
  home: string | null;
  birthPlace: string | null;
  player: string | null;
  getCOCScheet: (userID: string) => Promise<void>;
}

export const COCCharacterContext = createContext<COCCharacterSheet | null>(null);

export function COCCharacterProvider({ children }: React.PropsWithChildren<unknown>) {
  const user = useUser();

  const [name, setName] = useState<string | null>("");
  const [job, setJob] = useState<string | null>("");
  const [age, setAge] = useState<number | null>(null);
  const [sex, setSex] = useState<string | null>("");
  const [home, setHome] = useState<string | null>("");
  const [birthPlace, setBirthPlace] = useState<string | null>("");
  const [player, setPlayer] = useState<string | null>("");

  const getCOCScheet = useCallback(async (userID: string) => {
    const { data: userData }: { data: userTable } = await supabase.from("user").select().eq("UID", userID).single();

    if (!userData) return;

    const { data }: { data: COCScheetTable } = await supabase
      .from("character_sheet_coc")
      .select()
      .eq("player_id", userData.id)
      .single();

    setName(data.name);
    setJob(data.job);
    setAge(data.age);
    setSex(data.sex);
    setHome(data.home);
    setBirthPlace(data.birth_place);
    setPlayer(userData.user_name);
  }, []);

  // TODO: Take it to the sheet selection page
  useEffect(() => {
    void getCOCScheet(user.id);
  }, [getCOCScheet, user]);

  const COCCharacterContextValue = useMemo(
    () => ({
      name,
      job,
      age,
      sex,
      home,
      birthPlace,
      player,
      getCOCScheet,
    }),
    [name, job, age, sex, home, birthPlace, player, getCOCScheet],
  );

  return <COCCharacterContext.Provider value={COCCharacterContextValue}>{children}</COCCharacterContext.Provider>;
}
