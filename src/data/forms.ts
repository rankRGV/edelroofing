// FormSpark endpoints for the site's lead forms (Eddie picked FormSpark
// 2026-10-18; rankrgv.com uses it too). Notification emails are set in the
// FormSpark dashboard, not here: hello@rankrgv.com only while on the preview;
// add eddie@ + kassie@edelroofing.com at launch (Eddie, 2026-10-21). A form
// with no ID stays in "please call" mode.
// IDs from Eddie, 2026-10-21 (4 forms; the inspection form was added that
// day). The free quote one matters most: the Google Search ads land there.
const formspark = (id: string) => (id ? `https://submit-form.com/${id}` : undefined);

export const forms = {
  // /mcallen-free-quote (Google Search ads landing page).
  freeQuote: formspark('IAjCsZyQi'),
  // /es-mx/contact-us and the /es-mx homepage form (a hidden `page` field
  // tells them apart).
  contactEs: formspark('xqgnTQvmA'),
  // /book-an-inspection (EN "Schedule a Free Inspection" buttons).
  inspection: formspark('oLFktgExr'),
  // /join-our-team applications.
  join: formspark('gcOXrDmGa'),
};
