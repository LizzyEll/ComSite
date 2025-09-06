export default async function Slide({ title, text, index }: { title: string; text: string; index: number }) {
    return (
        <div className={"flex min-h-screen flex-row items-center justify-between " + (index % 2 === 0 ? "bg-blue-950 text-white" : "bg-white text-blue-950")}>
            <h1 className="flex-1 text-4xl font-bold p-32">{title}</h1>
            <span className="flex-1 p-32">
                {text}
            </span>
        </div>
    );
}
