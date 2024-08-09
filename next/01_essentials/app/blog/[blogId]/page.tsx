//Notice tha name of the folder is in the square brackets, 
//this is for dynamic routing with it we can add parameters

type Props = {
    params: { blogId: string }
}
export default function BlogPage({ params }: Props) {
    return(
        <main>
            <h1>Blog post {params.blogId}</h1>
        </main>
    );
}