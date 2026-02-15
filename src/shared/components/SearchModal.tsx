import { X } from "lucide-react";
import ProductGrid from '../../feautures/products/components/ProductGrid';
import Spinner from './Spinner';
import { useSearchPreview } from "../../feautures/products/hooks/useSearchPreview";

interface SearchModalProps {
  search: string;
  onClose: () => void;
}

const SearchModal = ({ search, onClose }: SearchModalProps) => {
  const {isLoading, data, handleViewAll} = useSearchPreview(search, onClose)

  if (isLoading) return <Spinner loading={isLoading}/>;

  return (
    <div
    className="mt-30 fixed inset-0 z-30 flex items-start justify-center bg-black/30 backdrop-blur-[2px]"
    onClick={onClose}
    >
      <div
        className="relative w-[90vw] max-w-8xl max-h-[55vh] overflow-y-auto bg-white rounded-lg shadow-2xl p-6 border border-gray-200 "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">
            Search results for "<span className="text-blue-600">{search}</span>"
          </h3>
          <button
            onClick={onClose}
            className="text-red-600 hover:text-red-800 transition-colors"
            aria-label="Close search modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        {data?.products && data.products.length > 0 ? (
          <ProductGrid product={data.products.slice(0, 4)} explore={false} />
        ) : (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg">No products found for "{search}"</p>
            <p className="text-sm mt-2">Try searching with different keywords</p>
          </div>
        )}

        {data?.products && data.products.length > 0 && (
          <div className="sticky bottom-0 flex justify-center ">
          <button
            type="button"
            onClick={handleViewAll}
            className="text-blue-600 hover:text-white px-4 py-5 font-semibold bg-gray-800"
          >
            See All →
          </button>
        </div>

        )}
      </div>
    </div>
  );
};

export default SearchModal;
