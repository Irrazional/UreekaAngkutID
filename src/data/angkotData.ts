
export interface Stop {
  id: string;
  name: string;
  lat: number;
  lng: number;
}

export interface Route {
  id: string;
  name: string;
  description: string;
  color: string;
  fare: number;
  operatingHours: string;
  stops: Stop[];
}

export const angkotRoutes: Route[] = [
  {
    id: 'route-1',
    name: 'T01 - Poris - Karawaci',
    description: 'Poris Plawad - Karawaci UPH',
    color: '#3B82F6',
    fare: 5000,
    operatingHours: '05:00 - 21:00',
    stops: [
      { id: 'stop-1-1', name: 'Terminal Poris Plawad', lat: -6.1875, lng: 106.6180 },
      { id: 'stop-1-2', name: 'Pasar Anyar', lat: -6.1845, lng: 106.6210 },
      { id: 'stop-1-3', name: 'Jl. Daan Mogot KM 11', lat: -6.1820, lng: 106.6250 },
      { id: 'stop-1-4', name: 'Lippo Karawaci', lat: -6.1790, lng: 106.6290 },
      { id: 'stop-1-5', name: 'UPH Karawaci', lat: -6.1760, lng: 106.6320 },
    ]
  },
  {
    id: 'route-2',
    name: 'T02 - Ciledug - BSD',
    description: 'Ciledug - BSD City',
    color: '#10B981',
    fare: 6000,
    operatingHours: '05:30 - 22:00',
    stops: [
      { id: 'stop-2-1', name: 'Terminal Ciledug', lat: -6.2375, lng: 106.6980 },
      { id: 'stop-2-2', name: 'Pasar Ciledug', lat: -6.2345, lng: 106.7010 },
      { id: 'stop-2-3', name: 'Jl. Hos Cokroaminoto', lat: -6.2320, lng: 106.7040 },
      { id: 'stop-2-4', name: 'Giant Bintaro', lat: -6.2290, lng: 106.7070 },
      { id: 'stop-2-5', name: 'BSD Junction', lat: -6.2260, lng: 106.7100 },
    ]
  },
  {
    id: 'route-3',
    name: 'T03 - Tangerang - Serpong',
    description: 'Kota Tangerang - Serpong',
    color: '#F59E0B',
    fare: 7000,
    operatingHours: '05:00 - 21:30',
    stops: [
      { id: 'stop-3-1', name: 'Alun-alun Tangerang', lat: -6.1783, lng: 106.6319 },
      { id: 'stop-3-2', name: 'Pasar Lama Tangerang', lat: -6.1803, lng: 106.6339 },
      { id: 'stop-3-3', name: 'Jl. Sudirman Tangerang', lat: -6.1823, lng: 106.6359 },
      { id: 'stop-3-4', name: 'Bumi Serpong Damai', lat: -6.2420, lng: 106.6650 },
      { id: 'stop-3-5', name: 'ITC Serpong', lat: -6.2450, lng: 106.6680 },
    ]
  },
  {
    id: 'route-4',
    name: 'T04 - Benda - Pamulang',
    description: 'Benda Raya - Pamulang',
    color: '#EF4444',
    fare: 5500,
    operatingHours: '05:30 - 21:00',
    stops: [
      { id: 'stop-4-1', name: 'Terminal Benda', lat: -6.2180, lng: 106.6580 },
      { id: 'stop-4-2', name: 'Pasar Benda', lat: -6.2200, lng: 106.6600 },
      { id: 'stop-4-3', name: 'Jl. Raya Serpong', lat: -6.2220, lng: 106.6620 },
      { id: 'stop-4-4', name: 'Universitas Pamulang', lat: -6.2240, lng: 106.6640 },
      { id: 'stop-4-5', name: 'Terminal Pamulang', lat: -6.2260, lng: 106.6660 },
    ]
  },
  {
    id: 'route-5',
    name: 'T05 - Cikokol - Alam Sutera',
    description: 'Cikokol - Alam Sutera',
    color: '#8B5CF6',
    fare: 6500,
    operatingHours: '05:00 - 22:00',
    stops: [
      { id: 'stop-5-1', name: 'Stasiun Cikokol', lat: -6.1950, lng: 106.6150 },
      { id: 'stop-5-2', name: 'Jl. Gatot Subroto', lat: -6.1970, lng: 106.6170 },
      { id: 'stop-5-3', name: 'Mall Tangerang City', lat: -6.1990, lng: 106.6190 },
      { id: 'stop-5-4', name: 'Pintu Tol Serpong', lat: -6.2010, lng: 106.6210 },
      { id: 'stop-5-5', name: 'Alam Sutera Mall', lat: -6.2030, lng: 106.6230 },
    ]
  }
];
