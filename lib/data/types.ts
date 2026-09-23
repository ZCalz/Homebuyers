export interface Testimonial {
  quote: string;
  name: string;
  area: string;
}

export interface City {
  slug: string;
  name: string;
  county: string;
  stateSlug: string;
  neighborhoods: string[];
  landmark: string;
  zips: string[];
  lat: number;
  lng: number;
  medianDaysToClose: number;
  /** Unique opening paragraph for this market. */
  intro: string;
  /** Unique local-expertise paragraph (regulations, housing stock, market quirks). */
  localAngle: string;
  testimonial: Testimonial;
  /** Slugs of nearby cities in the same state, used for internal linking. */
  nearby: string[];
  targetKeyword?: string;
  metaTitle?: string;
  metaDescription?: string;
  h1?: string;
}

export interface RegulationNote {
  title: string;
  body: string;
}

export interface StateData {
  slug: string;
  name: string;
  abbr: string;
  /** Fictional demo tracking number for this territory. */
  phone: string;
  phoneDisplay: string;
  /** Representative streetscape image for this region, shown on region cards. */
  image: string;
  imageAlt: string;
  heroBlurb: string;
  intro: string;
  regulationNote: RegulationNote;
  cities: City[];
  targetKeyword?: string;
  metaTitle?: string;
  metaDescription?: string;
  h1?: string;
}
