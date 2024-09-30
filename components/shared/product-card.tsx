import Image from 'next/image';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Plus } from 'lucide-react';

type IProductCardProps = {
  id: number;
  name: string;
  description?: string;
  imageUrl: string;
  price: number;
};

const ProductCard: React.FC<IProductCardProps> = ({ id, name, description, imageUrl, price }) => {
  return (
    <div>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>

        <div>
          <Title className="mb-1 mt-3 font-bold" text={name} size="sm" />
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem modi accusantium, amet
            exercitationem numquam odit incidunt delectus laborum nisi perspiciatis adipisci culpa
            tempora, deserunt nesciunt alias sapiente laboriosam ab doloremque.{description}
          </p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-[20px]">{price} $</span>
            <Button>
              <Plus className="w-5 h-5 mr-1" />В корзину
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
