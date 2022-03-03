import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Fade, Portal, useDisclosure } from '@chakra-ui/react';
import { requestSearch } from '../../services/requests/coins';
import { ISearch } from '../../types/coins';
import { SearchInput } from './SearchInput';
import { SearchWindow } from './SearchWindow';

type Props = {
  setDisplayItem(bool: boolean): void
};

export const Search: FC<Props> = ({setDisplayItem }) => {
  const [displaySearch, setDisplaySearch] = useState<'none' | 'flex'>('none');
  const { isOpen, onToggle } = useDisclosure();
  const [searchResult, setSearchResult] = useState<ISearch[]>([]);
  const [searchTimeOut, setSearchTimeOut] = useState<NodeJS.Timeout>();
  const [inputValue, setInputValue] = useState<string>('');


  const handleFocus = () => {
    onToggle();
    setDisplaySearch('flex');
  };

  const handleBlur = () => {
    setTimeout(() => {
      onToggle();
      setDisplayItem(true)
      setDisplaySearch('none');
    }, 300);
  };
  
  useEffect(() => {
    if (inputValue.length >= 2) {
      if (searchTimeOut) clearTimeout(searchTimeOut);
      const timeoutId = setTimeout(async () => {
        const response = await requestSearch(inputValue);
        setSearchResult(response.data.coins);
      }, 500);
      setSearchTimeOut(timeoutId);
    }
  }, [inputValue]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };

  return (
    <>

      <SearchInput
        setDisplayItem={setDisplayItem}
        handleBlur={handleBlur}
        handleChange={handleChange}
        handleFocus={handleFocus} />
    <Portal>
        <Fade in={isOpen}>
          <SearchWindow
            inputValue={inputValue}
            displaySearch={displaySearch}
            searchResult={searchResult} />
        </Fade>
      </Portal></>
  );
};
