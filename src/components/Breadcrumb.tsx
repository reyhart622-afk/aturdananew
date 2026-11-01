import React from 'react';
import { useFinance } from '../context/FinancialContext';
import { CATEGORIES_DATA } from '../data/categoriesData';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumb: React.FC = () => {
  const {
    activeView,
    selectedCategoryId,
    selectedSubcategoryId,
    selectedItemId,
    navigateToHome,
    navigateToCategory,
    navigateToSubcategory
  } = useFinance();

  if (activeView === 'home') return null;

  const currentCategory = CATEGORIES_DATA.find((c) => c.id === selectedCategoryId);
  const currentSubcategory = currentCategory?.subcategories.find((s) => s.id === selectedSubcategoryId);
  const currentItem = currentSubcategory?.items.find((i) => i.id === selectedItemId);

  // Generate Schema.org BreadcrumbList items
  const breadcrumbItems = [
    { name: 'Aturdana.id', url: 'https://aturdana.id/' }
  ];

  if (currentCategory) {
    breadcrumbItems.push({
      name: currentCategory.name,
      url: `https://aturdana.id/#${currentCategory.slug}`
    });
  }

  if (currentSubcategory) {
    breadcrumbItems.push({
      name: currentSubcategory.name,
      url: `https://aturdana.id/#${currentCategory?.slug}/${currentSubcategory.slug}`
    });
  }

  if (currentItem) {
    breadcrumbItems.push({
      name: currentItem.name,
      url: `https://aturdana.id/#${currentCategory?.slug}/${currentSubcategory?.slug}/${currentItem.slug}`
    });
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="py-2.5 px-4 sm:px-6 text-xs text-slate-400 border-b border-slate-800/40 bg-[#090e13]/60">
        <ol className="flex items-center flex-wrap gap-1.5 list-none m-0 p-0">
          <li>
            <button
              onClick={navigateToHome}
              className="flex items-center gap-1 text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Beranda</span>
            </button>
          </li>

          {currentCategory && (
            <>
              <li aria-hidden="true" className="text-slate-600">
                <ChevronRight className="w-3 h-3" />
              </li>
              <li>
                <button
                  onClick={() => navigateToCategory(currentCategory.id)}
                  className={`hover:text-emerald-400 transition-colors cursor-pointer ${
                    !currentSubcategory ? 'text-emerald-400 font-semibold' : 'text-slate-400'
                  }`}
                >
                  {currentCategory.name}
                </button>
              </li>
            </>
          )}

          {currentSubcategory && (
            <>
              <li aria-hidden="true" className="text-slate-600">
                <ChevronRight className="w-3 h-3" />
              </li>
              <li>
                <button
                  onClick={() => navigateToSubcategory(currentCategory!.id, currentSubcategory.id)}
                  className={`hover:text-emerald-400 transition-colors cursor-pointer ${
                    !currentItem ? 'text-emerald-400 font-semibold' : 'text-slate-400'
                  }`}
                >
                  {currentSubcategory.name}
                </button>
              </li>
            </>
          )}

          {currentItem && (
            <>
              <li aria-hidden="true" className="text-slate-600">
                <ChevronRight className="w-3 h-3" />
              </li>
              <li className="text-emerald-300 font-medium truncate max-w-[200px] sm:max-w-none">
                {currentItem.name}
              </li>
            </>
          )}
        </ol>
      </nav>
    </>
  );
};
