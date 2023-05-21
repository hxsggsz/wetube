import * as SelectStyled from '.';
import * as Select from '@radix-ui/react-select';
import { CaretDown } from 'phosphor-react';
import { Dispatch, ReactNode, SetStateAction, forwardRef } from 'react';

export const SelectCategories = ({ setSelect }: { setSelect: Dispatch<SetStateAction<string>> }) => {
  return (
    <Select.Root defaultValue="" onValueChange={(value) => setSelect(value)}>
      <SelectStyled.Trigger className="SelectTrigger" aria-label="Food">
        <Select.Value placeholder="Selecione uma categoria" />
        <Select.Icon className="SelectIcon">
          <CaretDown size={30} weight="bold" />
        </Select.Icon>
      </SelectStyled.Trigger>

      <Select.Portal>
        <SelectStyled.Content className="SelectContent">
          <Select.Viewport className="SelectViewport">
 
            <Select.Group>
              <SelectItem value="">Selecione uma categoria</SelectItem>
              <SelectItem data-cy="item-test-tech" value="Técnologia">Técnologia</SelectItem>
              <SelectItem value="Culinária">Comidas</SelectItem>
              <SelectItem value="Jogos">Jogos</SelectItem>
              <SelectItem data-cy="item-test" value="Animes">Animes</SelectItem>
              <SelectItem value="Música">Música</SelectItem>
            </Select.Group>

          </Select.Viewport>
        </SelectStyled.Content>
      </Select.Portal>
    </Select.Root>
  )
}

interface SelectProps extends Select.SelectItemProps {
  children: ReactNode
}

export const SelectItem = forwardRef<HTMLDivElement, SelectProps>(function Select({ children, ...props }: SelectProps, ref) {
  return (
    <SelectStyled.Item className='SelectItem' {...props} ref={ref}>
      <SelectStyled.ItemText>{children}</SelectStyled.ItemText>
    </SelectStyled.Item>
  )
})
