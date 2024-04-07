import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { Search as SearchIcon } from 'lucide-react';
import { useDebounce } from 'use-debounce';

import {
  Button,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Loader,
} from '@/components/ui';

import { getSearchData, getTrendingList } from '@/api/coingecko-api';

export const Search = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [debouncedSearch] = useDebounce(search, 500);
  const { data } = useQuery({
    queryKey: ['trendingList'],
    queryFn: getTrendingList,
  });
  const { data: searchData, isFetching: isFetchingSearchList } = useQuery({
    queryKey: ['searchList', debouncedSearch],
    queryFn: () => getSearchData(debouncedSearch),
    placeholderData: (prevData) => prevData,
    enabled: !!search,
  });
  const navigate = useNavigate();

  const searchOptions = searchData?.coins?.map((coin) => ({
    label: coin.name,
    value: coin.id,
  }));

  const options = data?.coins?.map((coin) => ({
    label: coin.item.name,
    value: coin.item.id,
  }));

  const isLoading = search !== debouncedSearch || isFetchingSearchList;

  const toggleOpen = () => setOpen((open) => !open);

  const handleSelect = (value: string) => {
    navigate({
      to: '/coins/$coinId',
      params: { coinId: value },
    });
    setOpen(false);
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <Button variant="outline" size="icon" onClick={toggleOpen}>
        <SearchIcon className="h-4 w-4" />
      </Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Type a command or search..."
          value={search}
          onValueChange={setSearch}
          className="w-10/12"
        />
        <CommandList>
          {!isLoading && <CommandEmpty>No results found for {`"${search}"`}</CommandEmpty>}
          {!!searchOptions?.length && (
            <CommandGroup heading="Search">
              {searchOptions?.map((option) => (
                <CommandItem key={option.value} onSelect={handleSelect} value={option.value}>
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          {!searchOptions?.length && (
            <CommandGroup heading="Trending coins">
              {options?.map((option) => (
                <CommandItem key={option.value} onSelect={handleSelect} value={option.value}>
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
        {isLoading && <Loader size={16} className="mt-3 mb-4 absolute right-10 bottom-0" />}
      </CommandDialog>
    </>
  );
};
