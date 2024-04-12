import { Link } from "react-router-dom";

function NotFound() {
    return (
        <section className="flex justify-center items-center min-h-screen bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-rose-600">404</h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Il manque quelque chose ici...</p>
                    <p className="mb-4 text-lg font-light text-gray-500">Désolé, nous ne trouvons pas cette page. Vous trouverez beaucoup de choses à explorer sur la page d'acceuil.</p>
                    <Link to={'/'} className="inline-flex text-white bg-rose-600 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Retour à la page d'accueil</Link>
                </div>   
            </div>
        </section>
    );
}

export default NotFound;