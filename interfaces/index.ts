export type User = {
  id: number;
  name: string;
};

export type COCScheetTable = {
  id: number | null;
  name: string;
  player_id: number | null;
  created_at: any; // TODO: fix
  job: string | null;
  age: number | null;
  sex: string | null;
  home: string | null;
  birth_place: string | null;
  stat_id: number | null;
  sanity: number | null;
  sanity_temporary: boolean | null;
  sanity_indefinite: boolean | null;
  health_max: number | null;
  health_temporary: number | null;
  health_wound: boolean | null;
  skills_id: number | null;
  weapons_id: number | null;
  description: string | string[] | null;
  ideology: string | string[] | null;
  important_persons: string | string[] | null;
  important_places: string | string[] | null;
  personal_items: string | string[] | null;
  traits: string | string[] | null;
  injuries_scars: string | string[] | null;
  phobias: string | string[] | null;
  spells: string | string[] | null;
  weird_entities: string | string[] | null;
  equipement: string | string[] | null;
  spending_level: number | null;
  cash: number | null;
  assets: number | null;
  team_id: number | null;
  notes: string | null;
  user_id: number | null;
};

export type userTable = {
  id: number | null;
  created_at: any | null;
  UID: any | number | null;
  user_name: string | null;
};
