import {redirect} from "next/navigation";
import {site} from "@/lib/site";
export default function BlogRedirect(){ redirect(site.blog); }