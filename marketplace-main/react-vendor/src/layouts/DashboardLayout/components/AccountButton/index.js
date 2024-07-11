import { useCallback, useRef, useState } from 'react';
import { Avatar, Box, ButtonBase, SvgIcon } from '@mui/material';
import User01Icon from '@untitled-ui/icons-react/build/esm/User01';

import AccountPopover from './AccountPopover';

const AccountButton = () => {
  const anchorRef = useRef(null);
  const [openPopover, setOpenPopover] = useState(false);

  const handlePopoverOpen = useCallback(() => {
    setOpenPopover(true);
  }, []);

  const handlePopoverClose = useCallback(() => {
    setOpenPopover(false);
  }, []);

  return (
    <>
      <Box
        component={ButtonBase}
        onClick={handlePopoverOpen}
        ref={anchorRef}
        sx={{
          alignItems: 'center',
          display: 'flex',
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: 'divider',
          height: 40,
          width: 40,
          borderRadius: '50%'
        }}
      >
        <Avatar
          sx={{
            height: 32,
            width: 32
          }}
          src='/assets/images/avatar.png'
        >
          <SvgIcon>
            <User01Icon />
          </SvgIcon>
        </Avatar>
      </Box>
      <AccountPopover
        anchorEl={anchorRef.current}
        onClose={handlePopoverClose}
        open={openPopover}
      />
    </>
  );
};

export default AccountButton