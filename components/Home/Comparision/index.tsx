import Chip from "@/components/Base/Chip";
import New from "./New";
import Old from "./Old";

export default function Comparision() {
  return (
    <div className="bg-accent-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <Chip title="Comparision" />
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4.5xl">
            How tendrs is making a difference?
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Here&apos;s how tendrs is changing the way tenders are managed and how it is different from the traditional way of managing tenders.
          </p>
        </div>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          <Old />
          <New />
        </div>
      </div>
    </div>
  );
}
