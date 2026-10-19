// FormSpark endpoints for the site's lead forms (Eddie picked FormSpark
// 2026-10-18; rankrgv.com uses it too). Each form's notification email goes
// to eddie@edelroofing.com + kassie@edelroofing.com, set in the FormSpark
// dashboard, not here. A form with no ID stays in "please call" mode.
// IDs are blank on purpose (Eddie, 2026-10-18): he creates the 3 FormSpark
// forms later. Fill all 3 before launch; the free quote one is a launch
// blocker because the Google Search ads land there.
const formspark = (id: string) => (id ? `https://submit-form.com/${id}` : undefined);

export const forms = {
  // /mcallen-free-quote (Google Search ads landing page).
  freeQuote: formspark(''),
  // /es-mx/contact-us and the /es-mx homepage form (a hidden `page` field
  // tells them apart).
  contactEs: formspark(''),
  // /join-our-team applications.
  join: formspark(''),
};
