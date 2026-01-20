import {router} from "express"
import {getArchives} from "../../test-fetch.js";

const router = router();


router.get("/archive", getArchives())




