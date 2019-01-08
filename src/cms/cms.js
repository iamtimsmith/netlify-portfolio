import React from "react";
import CMS from "netlify-cms";
import BlogPostPreview from "./templates/BlogPostPreview";

CMS.registerPreviewTemplate("blog", BlogPostPreview);
