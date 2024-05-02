import CreateCourse from "@/components/course/CreateCourse";
import { Metadata } from "next";

export const metadata:Metadata = {
    title: "Create Course"
}

export default function CreateCoursePage() {
    return <CreateCourse />
}