function n(t){if(!t.startsWith("/"))throw new Error("URL should start with /");return r("/vjc-site/"+t)}function r(t){return"/"+t.split("/").filter(Boolean).join("/")}export{n as a};
