import CMS from "netlify-cms";

import BlogPostPreview from "./templates/BlogPostPreview";
import "../../src/templates/blogPost/index.scss";

CMS.registerPreviewTemplate("blog", BlogPostPreview);
