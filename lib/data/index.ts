import { dc } from "./dc";
import { maryland } from "./maryland";
import { virginia } from "./virginia";
import { delaware } from "./delaware";
import type { City, StateData } from "./types";

export const states: StateData[] = [dc, maryland, virginia, delaware];

export function getState(slug: string): StateData | undefined {
  return states.find((s) => s.slug === slug);
}

export function getCity(
  stateSlug: string,
  citySlug: string
): { state: StateData; city: City } | undefined {
  const state = getState(stateSlug);
  const city = state?.cities.find((c) => c.slug === citySlug);
  return state && city ? { state, city } : undefined;
}

export function allCityParams(): { state: string; city: string }[] {
  return states.flatMap((s) =>
    s.cities.map((c) => ({ state: s.slug, city: c.slug }))
  );
}

/** Map a zip code to its state + city territory, if we serve it. */
export function routeZip(
  zip: string
): { state: StateData; city: City } | undefined {
  for (const state of states) {
    for (const city of state.cities) {
      if (city.zips.includes(zip)) return { state, city };
    }
  }
  // Fall back to state-level routing by zip prefix.
  const prefix = zip.slice(0, 3);
  const statePrefixes: Record<string, string> = {
    "200": "washington-dc",
    "202": "washington-dc",
    "203": "washington-dc",
    "204": "washington-dc",
    "205": "washington-dc",
    "206": "maryland",
    "207": "maryland",
    "208": "maryland",
    "209": "maryland",
    "210": "maryland",
    "211": "maryland",
    "212": "maryland",
    "214": "maryland",
    "215": "maryland",
    "216": "maryland",
    "217": "maryland",
    "218": "maryland",
    "219": "maryland",
    "220": "virginia",
    "221": "virginia",
    "222": "virginia",
    "223": "virginia",
    "224": "virginia",
    "225": "virginia",
    "226": "virginia",
    "227": "virginia",
    "228": "virginia",
    "229": "virginia",
    "230": "virginia",
    "231": "virginia",
    "232": "virginia",
    "233": "virginia",
    "234": "virginia",
    "235": "virginia",
    "236": "virginia",
    "237": "virginia",
    "197": "delaware",
    "198": "delaware",
    "199": "delaware",
  };
  const stateSlug = statePrefixes[prefix];
  if (!stateSlug) return undefined;
  const state = getState(stateSlug);
  if (!state) return undefined;
  return { state, city: state.cities[0] };
}

export const SITE = {
  name: "USHomeBuy",
  tagline: "Sell your house as-is across DC, Maryland, Virginia & Delaware",
  url: "https://www.ushomebuy.com",
  phone: "+18445550190",
  phoneDisplay: "(844) 555-0190",
  email: "offers@ushomebuy.com",
};
