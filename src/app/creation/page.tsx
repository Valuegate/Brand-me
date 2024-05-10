import Creation from "@/components/creation/Creation";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: "Creation"
}

export default function CreationPage() {
    return <Creation />
}