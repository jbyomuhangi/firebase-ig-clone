import { Box, styled } from "@mui/material";
import React, { useMemo } from "react";

const SquareGridContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

const GridRowContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
}));

const GridItemContainer = styled(Box)(() => ({
  flex: 1,
  aspectRatio: "1/1",
  backgroundColor: "yellow",
}));

interface SquareGridProps {
  data?: any[];
  itemsPerRow?: number;
}

const SquareGrid: React.FC<SquareGridProps> = ({
  itemsPerRow = 3,
  data = [1, 2, 3, 4, 5, 6, 7],
}) => {
  const columnNumbers = useMemo(() => {
    const columnCount = Math.ceil(data.length / itemsPerRow);
    return Array.from(Array(columnCount).keys());
  }, [data.length, itemsPerRow]);

  const rowNumbers = useMemo(() => {
    return Array.from(Array(itemsPerRow).keys());
  }, [itemsPerRow]);

  return (
    <SquareGridContainer>
      {columnNumbers.map((columnNumber) => {
        return (
          <GridRowContainer key={columnNumber}>
            {rowNumbers.map((rowNumber) => {
              const itemIndex = columnNumber * itemsPerRow + rowNumber;
              const item = data[itemIndex];
              return (
                <GridItemContainer key={rowNumber}>{item}</GridItemContainer>
              );
            })}
          </GridRowContainer>
        );
      })}
    </SquareGridContainer>
  );
};

export default SquareGrid;
