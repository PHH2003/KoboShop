import { css } from '@emotion/react'
import { Select } from 'antd'
import { data } from 'autoprefixer'
import { FC, useEffect, useState } from 'react'
import { Controller } from 'react-hook-form'
import { FaMoneyCheckAlt } from 'react-icons/fa'
import { getOneUserSystem } from '~/app/api/auth/auth.api'

interface IPaymentComponent {
  control: any
  errors: any
}

const PaymentComponent: FC<IPaymentComponent> = ({ control, errors }) => {
  const [citis, setCitis] = useState<any>([])
  const [districts, setDistricts] = useState<any>([])
  const [communs, setCommuns] = useState<any>([])
  const [selectedCity, setSelectedCity] = useState<any>([])
  const [selectDistrict, setSelectedDistricts] = useState<any>([])
  const [selectedCommuns, setSelectedCommuns] = useState<any>([])
  const [dataUser, setDataUser] = useState<any>(null);
  const idUser = localStorage.getItem("userId");
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await getOneUserSystem(idUser);
            setDataUser(response.data);
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    if (idUser) {
        fetchData()
    }
}, [idUser]);
  const loadCitis = async () => {
    const res = await fetch(`https://provinces.open-api.vn/api/`)
    const data = await res.json()
    setCitis(data)
  }

  const loadDistricts = async (dataCiti: any) => {
    const selectedCity = citis.find((city: any) => city.name == dataCiti)
    if (selectedCity) {
      const res = await fetch(`https://provinces.open-api.vn/api/p/${selectedCity.code}?depth=2`)
      const data = await res.json()
      setDistricts(data.districts)
    }
  }

  const loadCommuns = async (districName: any) => {
    const selectDistrict = districts.find((district: any) => district.name == districName)
    if (selectDistrict) {
      const res = await fetch(`https://provinces.open-api.vn/api/d/${selectDistrict.code}?depth=2`)
      const data = await res.json()
      setCommuns(data.wards)
    }
  }
  useEffect(() => {
    loadCitis()
  }, [])

  useEffect(() => {
    if (selectedCity) {
      loadDistricts(selectedCity)
      setSelectedDistricts('')
      setSelectedCommuns('')
    }
  }, [selectedCity])

  useEffect(() => {
    if (selectDistrict) {
      loadCommuns(selectDistrict)
      setSelectedCommuns('')
    }
  }, [selectDistrict])
  
  return (
    <div css={cssPayment}>
      <div className='flex justify-between'>
        <h2 className='text-[17px] font-semibold text-red-700'>Payment</h2>
        <em className='text-gray-400'>* indicates a required field</em>
      </div>
      <div className='flex justify-between'>
        <div>
          <form action='' className='w-[200px]'>
            <div>
              <Controller
                control={control}
                name='fullname'
                defaultValue={dataUser?.fullname}
                render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
                  <input type='text' value={value} placeholder='fullname' onChange={onChange} ref={ref} />
                )}
              />
              {errors && <span className='text-red-800 font-semibold'>{errors.fullname?.message}</span>}
            </div>{' '}
            <br />
            <div>
              <Controller
                control={control}
                name='phoneNumber'
                render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
                  <input type='text' value={value} placeholder='phoneNumber' onChange={onChange} ref={ref} />
                )}
              />
              {errors && <span className='text-red-800 font-semibold'>{errors.phoneNumber?.message}</span>}
            </div>
            <br />
            <div>
              <Controller
                control={control}
                name='city'
                render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
                  <div>
                    <Select
                      className='w-[330px] h-[45.6px]'
                      placeholder='Select province or city'
                      onChange={(value: any) => {
                        setSelectedCity(value)
                        setSelectedDistricts('')
                        setSelectedCommuns('')
                        onChange(value)
                      }}
                      value={value}
                    >
                      {citis?.map((city: any) => (
                        <Select.Option key={city.code} value={city.name}>
                          {city.name}
                        </Select.Option>
                      ))}
                    </Select>
                    {error && <span className='text-red-800 font-semibold'>{error.message}</span>}
                  </div>
                  // <input type='text' value={value} placeholder='City' onChange={onChange} ref={ref} />
                )}
              />
            </div>
            <br />
            <div>
              <Controller
                control={control}
                name='district'
                render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
                  <div>
                    <Select
                      className='w-[330px] h-[45.6px]'
                      placeholder='Select district'
                      onChange={(value: any) => {
                        setSelectedDistricts(value)
                        setSelectedCommuns('')
                        onChange(value)
                      }}
                      value={value}
                    >
                      {districts?.map((district: any) => (
                        <Select.Option key={district.code} value={district.name}>
                          {district.name}
                        </Select.Option>
                      ))}
                    </Select>
                    {error && <span className='text-red-800 font-semibold'>{error.message}</span>}
                  </div>
                  // <input type='text' value={value} placeholder='District' onChange={onChange} ref={ref} />
                )}
              />
            </div>
            <br />
            <div>
              <Controller
                control={control}
                name='commune'
                render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
                  <div>
                    <Select
                      className='w-[330px] h-[45.6px]'
                      placeholder='Select commune'
                      onChange={(value: any) => {
                        setSelectedCommuns(value)
                        onChange(value)
                      }}
                      value={value}
                    >
                      {communs?.map((commune: any) => (
                        <Select.Option key={commune.code} value={commune.name}>
                          {commune.name}
                        </Select.Option>
                      ))}
                    </Select>
                    {error && <span className='text-red-800 font-semibold'>{error.message}</span>}
                  </div>
                  // <input type='text' value={value} placeholder='Commune' onChange={onChange} ref={ref} />
                )}
              />
            </div>{' '}
            <br />
            <div>
              <Controller
                control={control}
                name='detailAddress'
                render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
                  <input type='text' value={value} placeholder='detailAddress' onChange={onChange} ref={ref} />
                )}
              />
              {errors && <span className='text-red-800 font-semibold'>{errors.detailAddress?.message}</span>}
            </div>{' '}
            <br />
          </form>
        </div>
        <div>
          <div className='flex mt-9'>
            <p className='px-4'>
              <FaMoneyCheckAlt className='text-red-800 text-[30px]' />
            </p>{' '}
            <p>Pay with vnPay</p>
          </div>
          <div className='flex mt-3'>
            <p className='px-4'>
              <FaMoneyCheckAlt className='text-red-800 text-[30px]' />
            </p>{' '}
            <p>Payment on delivery</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentComponent

const cssPayment = css`
  form {
    margin: 20px auto;
  }
  span {
    font-weight: bold;
  }
  input[type='text'] {
    width: 330px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
  }
`
