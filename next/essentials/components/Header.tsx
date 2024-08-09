//Since the file name is not page, it is just a component and will not be served by NextJS
export function Header() {
    return (
        <header>
            <img src="/logo.png" alt="A server surrounded by magic sparkles." />
            <h1>Welcome to this NextJS Course!</h1>
        </header>
    );
}