import CMS from "netlify-cms";

import BlogPostPreview from "./templates/BlogPostPreview";
import BlogPostStyles from "./templates/BlogPostStyles.css";

CMS.registerPreviewTemplate("blog", BlogPostPreview);
CMS.registerPreviewStyle(BlogPostStyles);
