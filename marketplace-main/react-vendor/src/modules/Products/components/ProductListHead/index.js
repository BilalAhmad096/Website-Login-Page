import { useCallback, useMemo, useRef, useState } from 'react';
import { Box, Divider, Input, Stack, SvgIcon, Chip, Typography } from '@mui/material';
import SearchMdIcon from '@untitled-ui/icons-react/build/esm/SearchMd';
import useStyles from './styles';
import MultiSelect from 'components/MultiSelect';

const statusOptions = [
    {
        label: 'Published',
        value: 'published'
    },
    {
        label: 'Pending For Verification',
        value: 'pending'
    },
    {
        label: 'Draft',
        value: 'draft'
    }
];

const ProductListHead = () => {
    const queryRef = useRef(null);

    const [query, setQuery] = useState('');
    const [chips, setChips] = useState([]);

    const classes = useStyles()
    const showChips = chips.length > 0;

    const handleQueryChange = useCallback((event) => {
        event.preventDefault();
        setQuery(queryRef.current?.value || '');
    }, []);

    const handleChipDelete = () => {

    }

    const handleStatusChange = useCallback((values) => {
        setChips((prevChips) => {
            const valuesFound = [];

            const newChips = prevChips.filter((chip) => {
                if (chip.field !== 'status') {
                    return true;
                }

                const found = values.includes(chip.value);

                if (found) {
                    valuesFound.push(chip.value);
                }

                return found;
            });

            if (values.length === valuesFound.length) {
                return newChips;
            }

            values.forEach((value) => {
                if (!valuesFound.includes(value)) {
                    const option = statusOptions.find((option) => option.value === value);

                    newChips.push({
                        label: 'Status',
                        field: 'status',
                        value,
                        displayValue: option.label
                    });
                }
            });

            return newChips;
        });
    }, []);

    const statusValues = useMemo(() => chips
        .filter((chip) => chip.field === 'status')
        .map((chip) => chip.value), [chips]);

    return (
        <Box>
            <Stack className={classes.searchBox} alignItems="center" component="form" direction="row" onSubmit={handleQueryChange} spacing={2}>
                <SvgIcon>
                    <SearchMdIcon />
                </SvgIcon>
                <Input
                    disableUnderline
                    fullWidth
                    inputProps={{ ref: queryRef }}
                    placeholder="Search by product name"
                    sx={{ flexGrow: 1 }}
                    value={query}
                />
            </Stack>
            <Divider />
            {showChips
                ? (
                    <Stack className={classes.activeFiltersCard} alignItems="center" direction="row" flexWrap="wrap" gap={1}>
                        {chips.map((chip, index) => (
                            <Chip
                                key={index}
                                label={(
                                    <Box className={classes.activeFilterLabel}>
                                        <>
                                            <span>
                                                {chip.label}
                                            </span>
                                            :
                                            {' '}
                                            {chip.displayValue || chip.value}
                                        </>
                                    </Box>
                                )}
                                onDelete={() => handleChipDelete(chip)}
                                variant="outlined"
                            />
                        ))}
                    </Stack>
                )
                : (
                    <Box sx={{ p: 2.5 }}>
                        <Typography
                            color="text.secondary"
                            variant="subtitle2"
                        >
                            No filters applied
                        </Typography>
                    </Box>
                )}
            <Divider />
            <Stack alignItems="center" direction="row" flexWrap="wrap" spacing={1} sx={{ p: 1 }}>
                <MultiSelect
                    label="Category"
                    onChange={handleStatusChange}
                    options={statusOptions}
                    value={statusValues}
                />
            </Stack>
        </Box>
    )
}

export default ProductListHead