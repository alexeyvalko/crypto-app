import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Fade, Portal, useDisclosure } from '@chakra-ui/react';
import { requestSearch } from '../../services/requests/coins';
import { ISearch } from '../../types/coins';
import { SearchInput } from './SearchInput';
import { SearchWindow } from './SearchWindow';

type Props = {
  setDisplayItem(bool: boolean): void;
};

export const Search: FC<Props> = ({ setDisplayItem }) => {
  const [displaySearch, setDisplaySearch] = useState<'none' | 'flex'>('none');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchResult, setSearchResult] = useState<ISearch[]>([]);
  const [searchTimeId, setSearchTimeId] = useState<NodeJS.Timeout>();
  const [inputValue, setInputValue] = useState<string>('');
  const SEARCH_TIMEOUT = 1000;
  const SHOW = 'flex';
  const HIDE = 'none';
  const INPUT_LENGTH_MIN = 2;

  const handleFocus = () => {
    onOpen();
    setDisplaySearch(SHOW);
  };

  const handleBlur = () => {
    setTimeout(() => {
      onClose();
      setDisplaySearch(HIDE);
      setDisplayItem(true);
    }, 300);
  };

  const searchCoins = (value: string)=> {
    if (searchTimeId) clearTimeout(searchTimeId);
    const timeoutId = setTimeout(async () => {
      const response = await requestSearch(value);
      setSearchResult(response.data.coins);
    }, SEARCH_TIMEOUT);
    setSearchTimeId(timeoutId)
  }

  useEffect(() => {
    if (inputValue.length >= INPUT_LENGTH_MIN) {
      searchCoins(inputValue);
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
        handleFocus={handleFocus}
      />
      <Portal>
        <Fade in={isOpen}>
          <SearchWindow
            inputValue={inputValue}
            displaySearch={displaySearch}
            searchResult={searchResult}
          />
        </Fade>
      </Portal>
    </>
  );
};
