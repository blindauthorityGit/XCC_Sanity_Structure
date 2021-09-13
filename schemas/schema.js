// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import person from "./person";
import gallery from "./gallery";
import youtube from "./youtube";
// import settings from "./settings";
import call from "./call";
import link from "./link";
import siteSettings from "./siteSettings";
import emailContact from "./email";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: "default",
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        /* Your types here! */
        // settings,
        siteSettings,
        person,
        gallery,
        youtube,
        call,
        link,
        emailContact,
    ]),
});
