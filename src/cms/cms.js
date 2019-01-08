import CMS from "netlify-cms";

import BlogPostPreview from "./templates/BlogPostPreview";

CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewStyle("./templates/BlogPostStyles.css");
