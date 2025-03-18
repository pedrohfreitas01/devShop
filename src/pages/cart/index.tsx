export function Cart() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

      <section className="flex flex-wrap items-center justify-between border-b-2 border-gray-300 py-4 gap-x-6">
        <img
          src="https://dlcdnwebimgs.asus.com/gain/61C10B93-CB5D-49A6-A4CB-24A77EB00DAE"
          alt="rognot"
          className="w-28"
        />

        <strong className="text-lg">Preço: R$ 22.300</strong>

        <div className="flex items-center gap-3">
          <button
            className="bg-slate-600 px-3 py-1 rounded text-white font-medium"
            aria-label="Diminuir quantidade"
          >
            -
          </button>
          <span className="text-lg">1</span>
          <button
            className="bg-slate-600 px-3 py-1 rounded text-white font-medium"
            aria-label="Aumentar quantidade"
          >
            +
          </button>
        </div>

        <strong className="text-lg">Subtotal: R$ 22.300</strong>
      </section>

      <p className="font-bold mt-4 text-xl">Total: R$ 22.300</p>
    </div>
  );
}
