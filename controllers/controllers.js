import Newsletter from "../models/newsletter.js";

export async function getNewsletterById(id) {
  return await Newsletter.findById(id);
}