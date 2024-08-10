export function ProductSpec() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Product Specifications</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Frame</h3>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold">Material:</span> Aluminum
            </li>
            <li>
              <span className="font-semibold">Size:</span> 54 cm
            </li>
            <li>
              <span className="font-semibold">Weight:</span> 1.5 kg
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Components</h3>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold">Gearing:</span> 11-speed
            </li>
            <li>
              <span className="font-semibold">Brakes:</span> Disc
            </li>
            <li>
              <span className="font-semibold">Tires:</span> 700c x 28mm
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Geometry</h3>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold">Seat Tube:</span> 54 cm
            </li>
            <li>
              <span className="font-semibold">Top Tube:</span> 55 cm
            </li>
            <li>
              <span className="font-semibold">Wheelbase:</span> 100 cm
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Other</h3>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold">Pedals:</span> Clipless
            </li>
            <li>
              <span className="font-semibold">Saddle:</span> Ergonomic
            </li>
            <li>
              <span className="font-semibold">Warranty:</span> 2 years
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
