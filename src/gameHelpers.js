export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;


//create a 20 by 12 stage with 20 rows and 12 columns that refreshes into clear cells as it rerenders.
export const createStage = () =>
    Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill([0, 'clear'])
    )
