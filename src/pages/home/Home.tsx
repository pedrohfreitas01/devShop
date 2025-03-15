import { BsCartPlus } from "react-icons/bs";

export function Home() {
  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
          Produtos em alta
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          <section className="w-full">
            <img
              className="w-full rotate-lg max-h-70 mb-2"
              src="https://dlcdnwebimgs.asus.com/gain/61C10B93-CB5D-49A6-A4CB-24A77EB00DAE"
              alt="logo produto"
            />
            <p className="font-medium mt-1 mb-2">Rog NOTBOOK GAMER</p>
            <div className="flex gap-3 items-end">
              <strong className="text-zinc-700/90">R$19000</strong>
              <button className="bg-zinc-900 p-1 rounded cursor-pointer">
                <BsCartPlus size={20} color="#fff" />
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
