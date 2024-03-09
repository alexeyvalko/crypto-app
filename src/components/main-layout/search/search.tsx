import { useEffect, useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';

import {
  Button,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui';

export const Search = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const toggleOpen = () => setOpen((open) => !open);

  const handleSelect = (value: string) => {
    console.log(value);
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
        <CommandInput placeholder="Type a command or search..." value={search} onValueChange={setSearch} />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={handleSelect}>Bitcoin</CommandItem>
            <CommandItem onSelect={handleSelect}>Ethereum</CommandItem>
            <CommandItem onSelect={handleSelect}>Ton</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
