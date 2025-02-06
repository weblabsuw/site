interface Config {
  loopsFormEndpoint?: string;
  loopsListId?: string;
  socials: {
    discord?: string;
    instagram?: string;
  };
}

export const config: Config = {
  loopsFormEndpoint: "https://app.loops.so/api/newsletter-form/cm51kudwy00adsujjjmz40eke",
  loopsListId: "cm51r4v9x01pi0mk5dza4b5wz",
  socials: {
    discord: "https://go.weblabs.club/discord",
    instagram: "https://instagram.com/weblabsuw",
  }
};