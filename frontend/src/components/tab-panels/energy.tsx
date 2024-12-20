import { CarbonFootprintInput } from '@eco/models/carbon-footprint'
import { validateNonNegative } from '@eco/utils/form'
import { Box, Button, TextField, Typography } from '@mui/material'
import { useFormContext } from 'react-hook-form'

interface EnergyPanelProps {
  onClickNext: () => void
}

export function EnergyPanel({ onClickNext }: EnergyPanelProps) {
  const { register, handleSubmit, formState } =
    useFormContext<CarbonFootprintInput>()

  function handleGoToNextTab() {
    onClickNext()
  }

  const error = formState.errors?.electricityUsageKWhPerMonth?.message

  return (
    <form
      onSubmit={handleSubmit(handleGoToNextTab)}
      style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <Box
        width="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        gap={4}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          fontFamily="ubuntu"
          color="secondary.dark"
        >
          Enter your monthly electricity usage
        </Typography>

        <TextField
          {...register('electricityUsageKWhPerMonth', {
            valueAsNumber: true,
            required: {
              value: true,
              message: 'Please insert your electric usage',
            },
            validate: {
              nonnegative: (value) =>
                validateNonNegative('electricity usage', value),
            },
          })}
          label="Electricity usage (Kwh/month)"
          type="number"
          fullWidth
          helperText={error}
          error={!!error}
        />

        <Box
          display="flex"
          alignSelf="flex-end"
          alignItems="center"
          justifyContent="flex-end"
          width="100%"
          bottom={0}
        >
          <Button
            type="submit"
            color="primary"
            variant="contained"
            disabled={!!error}
            sx={{ fontWeight: 'bold' }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </form>
  )
}
