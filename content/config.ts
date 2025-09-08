interface Config {
  loopsFormEndpoint?: string;
  loopsListId?: string;
  socials: {
    discord?: string;
    instagram?: string;
    email?: string;
  };
}

export const config: Config = {
  loopsFormEndpoint:
    "https://app.loops.so/api/newsletter-form/cm51kudwy00adsujjjmz40eke",
  loopsListId: "cmf8q9dwpagkj0i0s791ld0j0",
  socials: {
    discord: "https://go.weblabs.club/discord",
    instagram: "https://instagram.com/weblabsuw",
    email: "weblabsuw@gmail.com",
  },
};
