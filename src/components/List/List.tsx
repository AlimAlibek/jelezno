
import { Button, List, Typography } from "antd";

type ListProps = {
    list: (API.Album & {favorite?: boolean})[],
    saveToFavorites?: (item: API.Album) => void;
    removeFromFavorites?: (item: API.Album) => void;
}
const ListComponent: React.FC<ListProps> = ({list, saveToFavorites, removeFromFavorites}) => {

    return (
        <List
            size="large"
            className="demo-loadmore-list"
            itemLayout="vertical"
            dataSource={list}
            renderItem={(item) => (
              <List.Item
                key={item.id}
                actions={[
                  saveToFavorites && removeFromFavorites &&
                  <Button
                    onClick={() => item.favorite ? removeFromFavorites(item) : saveToFavorites(item)}
                  >
                    {item.favorite ? 'Удалить из избранных' : 'Добавить в избранные'}
                  </Button>
                ]}
                extra={
                  <img
                    width={150}
                    alt="logo"
                    src={item.thumbnailUrl}
                  />
                }
              >
                <Typography.Title>{item.id}. {item.title}</Typography.Title>
              </List.Item>
            )}
        />
    )
}

export default ListComponent;
