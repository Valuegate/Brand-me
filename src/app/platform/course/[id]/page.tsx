import ViewCourse from "@/components/platform/ViewCourse";

export const metadata = {
  title: "Course"
}

export default function ViewCoursePage({params} : any) {
  const {id} = params;
  return <ViewCourse id={id}/>
}