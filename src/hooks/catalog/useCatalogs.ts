import { useEffect, useState } from "react";
import { Catalog } from "../../types/Catalog";
import { api } from "../../utils/api";

export const useCatalogs = () => {
  const [catalogs, setCatalogs] = useState<Catalog[]>([]);

  const getCatalogs = async () => {
    const { data: { data: dataRaw } } = await api.get('/catologos');

    const catalogsMapping = dataRaw.map(({ id, attributes }: { id: number; attributes: any }) => ({
      ...attributes,
      id,
    }));

    setCatalogs(catalogsMapping);
  };

  const removeCatalog = async (catalogId: string) => {
    await api.put(`/catologos/${catalogId}`, {
      data: {
        disponible: false,
        miconf: false
      }
    });

    await getCatalogs();
  };

  const enabledCatalog = async (catalogId: string) => {
    await api.put(`/catologos/${catalogId}`, {
      data: {
        disponible: true,
        miconf: false
      }
    });

    await getCatalogs();
  };

  const myCatalog = async (catalogId: string) => {
    await api.put(`/catologos/${catalogId}`, {
      data: {
        disponible: true,
        miconf: true
      }
    });

    await getCatalogs();
  };
  const getCatalogId = async (catalogId: string) => {
    const response = await api.get(`/catologos/${catalogId}`);
    const catalogData = response.data.data.attributes;
    return catalogData;
  }
  useEffect(() => {
    getCatalogs();
  }, []);

  return {
    catalogs,
    removeCatalog,
    enabledCatalog,
    myCatalog,
    getCatalogId,
  };
};
